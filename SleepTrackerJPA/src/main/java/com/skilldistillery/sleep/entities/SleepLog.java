package com.skilldistillery.sleep.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Objects;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="sleep_log")
public class SleepLog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	private LocalDate date;
	
	
	@Column(name="bed_time")
	private LocalTime bedTime;
	
	
	@Column(name="wake_time")
	private LocalTime wakeTime;
	
	private String notes;
	
	private int tiredness;

	public SleepLog() {
		super();
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SleepLog other = (SleepLog) obj;
		return id == other.id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getBedTime() {
		return bedTime;
	}

	public void setBedTime(LocalTime bedTime) {
		this.bedTime = bedTime;
	}

	public LocalTime getWakeTime() {
		return wakeTime;
	}

	public void setWakeTime(LocalTime wakeTime) {
		this.wakeTime = wakeTime;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getTiredness() {
		return tiredness;
	}

	public void setTiredness(int tiredness) {
		this.tiredness = tiredness;
	}

	@Override
	public String toString() {
		return "SleepLog [id=" + id + ", user=" + user + ", date=" + date + ", bedTime=" + bedTime + ", wakeTime="
				+ wakeTime + ", notes=" + notes + ", tiredness=" + tiredness + "]";
	}
	
	
}
