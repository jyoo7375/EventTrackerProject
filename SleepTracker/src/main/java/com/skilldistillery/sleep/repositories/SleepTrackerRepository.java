package com.skilldistillery.sleep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sleep.entities.User;

public interface SleepTrackerRepository extends JpaRepository<User, Integer> {

}
