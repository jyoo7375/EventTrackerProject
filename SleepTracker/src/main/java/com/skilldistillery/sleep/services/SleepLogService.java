package com.skilldistillery.sleep.services;

import java.util.List;

import com.skilldistillery.sleep.entities.SleepLog;

public interface SleepLogService {
	
	SleepLog findById(int id);
	List<SleepLog> findByUsername(String username);
	SleepLog createSleepLog(String username, SleepLog newSleepLog);
	boolean deleteSleepLog(String username, int sleepLogId);
	SleepLog updateSleepLog(String username, int sleepLogId, SleepLog updatedLog);

}
