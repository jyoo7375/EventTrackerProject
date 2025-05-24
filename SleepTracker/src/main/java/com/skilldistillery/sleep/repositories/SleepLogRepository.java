package com.skilldistillery.sleep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sleep.entities.SleepLog;

public interface SleepLogRepository extends JpaRepository<SleepLog, Integer> {
	List<SleepLog> findByUser_Username(String username);

}
