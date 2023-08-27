<?php
/**
 * Plugin Name: Login Limit
 * Description: Protège votre site contre les attaques par force brute.
 * Version: 1.1
 * Author: Benoit Dewigne
 */

define('MAX_ATTEMPTS', 2);
define('LOCKOUT_TIME', 120);

class LoginAttemptLimiter {
  
    public function __construct() {
        // Add a filter to the authentication process
        add_filter('authenticate', [$this, 'check_login_attempts'], 30, 3);
    }

    // Check login attempts and handle authentication result
    public function check_login_attempts($user, $username, $password) {
        // Validate the input
        if ($this->validate_input($username, $password)) {
            // Get the number of login attempts
            $attempts = $this->get_login_attempts($username);

            // Check if the account should be locked
            if ($this->should_lock_account($attempts)) {
                // Lock the account
                return $this->lock_account($username, $attempts);
            }

            // Handle the authentication result
            return $this->handle_auth_result($user, $username);
        }
        return $user;
    }

    // Validate username and password
    private function validate_input($username, $password) {
        return $username && $password;
    }

    // Get the number of login attempts
    private function get_login_attempts($username) {
        return get_transient('login_attempts_' . $username);
    }

    // Check if the account should be locked
    private function should_lock_account($attempts) {
        return $attempts && $attempts['count'] >= MAX_ATTEMPTS;
    }

    // lock account
    private function lock_account($username, $attempts) {
        // Calculate the remaining lockout time
        $time_remaining = LOCKOUT_TIME - (time() - $attempts['time']);
        if ($time_remaining > 0) {
            // Create a new error message
            $error = new WP_Error();
            $error->add('too_many_attempts', 'Trop de tentatives de connexion échouées. Veuillez réessayer dans ' . ceil($time_remaining / 60) . ' minutes.');
            return $error;
        } else {
            // Delete the login attempts if the lockout time has passed
            delete_transient('login_attempts_' . $username);
            return null;
        }
    }

    // Handle the authentication result
    private function handle_auth_result($user, $username) {
        // Get the number of login attempts
        $attempts = $this->get_login_attempts($username);
        if (is_wp_error($user)) {
            // Increment the login attempts if the authentication failed
            $this->increment_login_attempts($username, $attempts);
        } else {
            // Reset the login attempts if the authentication was successful
            $this->reset_login_attempts($username);
        }
        return $user;
    }

    // Increment the login attempts or create a new transient
    private function increment_login_attempts($username, $attempts) {
        if ($attempts) {
            $attempts['count']++;
        } else {
            $attempts = array('count' => 1, 'time' => time());
        }
        set_transient('login_attempts_' . $username, $attempts, LOCKOUT_TIME);
    }

    // Reset the login attempts
    private function reset_login_attempts($username) {
        delete_transient('login_attempts_' . $username);
    }
}


new LoginAttemptLimiter();
?>