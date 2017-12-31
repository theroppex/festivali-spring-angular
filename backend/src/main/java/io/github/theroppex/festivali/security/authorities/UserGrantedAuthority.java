package io.github.theroppex.festivali.security.authorities;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

public class UserGrantedAuthority implements GrantedAuthority, Serializable {
    private final String authority;

    public UserGrantedAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }
}
