package io.github.theroppex.festivali.security.services;

import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.services.entityservices.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserSecurityService implements UserDetailsService {

    @Autowired
    private UsersService usersService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UsersEntity user = usersService.findUserByUsername(username);
        if(null == user) {
            throw new UsernameNotFoundException("User " + username + "not found");
        }

        return user;
    }
}
