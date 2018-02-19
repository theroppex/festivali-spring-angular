package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.RolesEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.RolesRepository;
import io.github.theroppex.festivali.data.repositories.UsersRepository;
import io.github.theroppex.festivali.http.util.PassChangeJsonWrapper;
import io.github.theroppex.festivali.security.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;

@Service
public class UsersService {
    private static final String DEFAULT_ROLE = "USER";

    private final UsersRepository usersRepository;
    private final RolesRepository rolesRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository, RolesRepository rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }

    public Iterable<UsersEntity> getAllUsers() {
        return this.usersRepository.findAll();
    }

    /**
     * Registers new user with default role of USER.
     *
     * @param user new user
     * @return registered user
     */
    public UsersEntity registerUser(UsersEntity user) {
        user.setPassword(SecurityUtility.getPasswordEncoder().encode(user.getPassword()));

        RolesEntity defaultRole = rolesRepository.findFirstByName(DEFAULT_ROLE);
        HashSet<RolesEntity> userRoles = new HashSet<>();
        userRoles.add(defaultRole);
        user.setRoles(userRoles);

        return usersRepository.save(user);
    }

    public boolean isUserByUsername(String username) {
        return usersRepository.existsByUsername(username);
    }

    public UsersEntity findUserByUsername(String username) {
        return usersRepository.findFirstByUsername(username);
    }

    public Collection<UsersEntity> findActiveUsers() {
        return usersRepository.findAllByActive(true);
    }
    public Collection<UsersEntity> findInactiveUsers() { return usersRepository.findAllByActive(false); }

    public UsersEntity activateUser(final int id) {
        UsersEntity user = usersRepository.findOne(id);
        if(user == null)
            return null;
        user.setActive(true);
        return usersRepository.save(user);
    }

    public UsersEntity setRole(final int user, final int role) {
        RolesEntity newRole = rolesRepository.findOne(role);
        UsersEntity targetUser = usersRepository.findOne(user);

        if(targetUser == null || newRole == null)
            return null;

        targetUser.getRoles().add(newRole);
        return usersRepository.save(targetUser);
    }

    public UsersEntity updateUser(UsersEntity user){
        return usersRepository.save(user);
    }

    public void deleteUser(UsersEntity user) {
        usersRepository.delete(user);
    }

    public void deleteUser(final int id) {
        usersRepository.delete(id);
    }

    public void banUser(Integer userId) {
        UsersEntity user = usersRepository.findOne(userId);
        if(user == null)
            return;

        user.setBanned(true);
        usersRepository.save(user);
    }

    public void unbanUser(Integer userId) {
        UsersEntity user = usersRepository.findOne(userId);
        if(user == null)
            return;

        user.setBanned(false);
        usersRepository.save(user);
    }

    public void removeSeller(Integer userId) {
        UsersEntity user = this.usersRepository.findOne(userId);
        if(user == null)
            return;

        user.getRoles().removeIf(rolesEntity -> rolesEntity.getName().equals("SELLER"));
        this.usersRepository.save(user);
    }

    public void setSeller(Integer userId) {
        UsersEntity user = this.usersRepository.findOne(userId);
        RolesEntity role = this.rolesRepository.findFirstByName("SELLER");
        if(user == null || role == null)
            return;

        user.getRoles().add(role);
        this.usersRepository.save(user);
    }

    public UsersEntity changePassword(PassChangeJsonWrapper p) {
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(SecurityUtility.getPasswordEncoder().matches(p.getOldPass(), user.getPassword())){
            user.setPassword(SecurityUtility.getPasswordEncoder().encode(p.getNewPass()));
            return this.usersRepository.save(user);
        }

        return null;
    }
}
