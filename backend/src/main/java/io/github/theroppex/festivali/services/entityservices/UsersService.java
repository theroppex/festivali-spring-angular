package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.RolesEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.RolesRepository;
import io.github.theroppex.festivali.data.repositories.UsersRepository;
import io.github.theroppex.festivali.security.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
