package com.skilldistillery.sleep.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sleep.entities.SleepLog;
import com.skilldistillery.sleep.entities.User;
import com.skilldistillery.sleep.repositories.SleepLogRepository;
import com.skilldistillery.sleep.repositories.UserRepository;

@Service
public class SleepLogServiceImpl implements SleepLogService{
	
	@Autowired
	private SleepLogRepository sleepLogRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public SleepLog findById(int id) {
		return sleepLogRepo.findById(id).orElse(null);
	}

	@Override
	public List<SleepLog> findByUsername(String username) {
		User user = userRepo.findByUsername(username);
		if(user == null) {
			return null;
		}
		return sleepLogRepo.findByUser_Username(username);
	}

	@Override
	public SleepLog createSleepLog(String username, SleepLog newSleepLog) {
		User user = userRepo.findByUsername(username);
		if(user != null) {
			newSleepLog.setUser(user);
			return sleepLogRepo.saveAndFlush(newSleepLog);
		}
		return null;
	}

	@Override
	public boolean deleteSleepLog(String username, int sleepLogId) {
		boolean deleted = false;
		Optional<SleepLog> opt = sleepLogRepo.findById(sleepLogId);
		if(opt.isPresent() && opt.get().getUser().getUsername().equals(username)) {
			sleepLogRepo.deleteById(sleepLogId);
			return true;
		}
		return deleted;
	}

	@Override
	public SleepLog updateSleepLog(String username, int sleepLogId, SleepLog updatedLog) {
		User user = userRepo.findByUsername(username);
		Optional<SleepLog> opt = sleepLogRepo.findById(sleepLogId);
			if(opt.isPresent() && opt.get().getUser().getUsername().equals(username)) {
				SleepLog existingLog = opt.get();
				existingLog.setDate(updatedLog.getDate());
				existingLog.setBedTime(updatedLog.getBedTime());
				existingLog.setWakeTime(updatedLog.getWakeTime());
				existingLog.setNotes(updatedLog.getNotes());
				existingLog.setTiredness(updatedLog.getTiredness());
				
				return sleepLogRepo.save(existingLog);
			}
		return null;
	}

}
