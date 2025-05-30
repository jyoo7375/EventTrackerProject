package com.skilldistillery.sleep.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sleep.entities.SleepLog;
import com.skilldistillery.sleep.services.SleepLogService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
public class SleepLogController {
	
	private String username = "User";
	
	@Autowired
	private SleepLogService sleepLogService;
	
	@GetMapping("sleeplogs")
	public List<SleepLog> findUserById(HttpServletResponse res) {
		List<SleepLog> sleepLog = sleepLogService.findByUsername(username);
		if(sleepLog == null) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}
		return sleepLog;
	}
	
	@PostMapping("sleeplogs")
	public SleepLog create(@RequestBody SleepLog newSleepLog,
		HttpServletResponse res, 
		HttpServletRequest req) {
			SleepLog created = null;
			try {
				created = sleepLogService.createSleepLog(username, newSleepLog);
				if(created == null) {
					res.setStatus(HttpServletResponse.SC_NOT_FOUND);
				}
				else {
					res.setStatus(HttpServletResponse.SC_CREATED);
					String url = req.getRequestURL().append("/").append(created.getId()).toString();
					res.setHeader("Location", url);
				}
			} catch (Exception e) {
				e.printStackTrace();
				res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				created = null;
			}
				return created;
		
	}
	@PutMapping("sleeplogs/{logId}")
	public SleepLog updateSleepLog(@PathVariable("logId") int logId,
			@RequestBody SleepLog updatedSleepLog,
			HttpServletResponse res
	) {
		SleepLog updated = null;
		try {
			updated = sleepLogService.updateSleepLog(username, logId, updatedSleepLog);
			if(updated == null) {
				res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		
		return updated;
	}
	
	@DeleteMapping("sleeplogs/{logId}")
	public void deleteSleepLog(@PathVariable("logId") int logId,
			HttpServletResponse res) {
		boolean deleted = sleepLogService.deleteSleepLog(username, logId);
		try {
			if(deleted) {
				res.setStatus(HttpServletResponse.SC_NO_CONTENT);
			}else {
				res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
	}

}
