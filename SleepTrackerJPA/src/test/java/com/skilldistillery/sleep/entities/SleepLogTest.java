package com.skilldistillery.sleep.entities;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class SleepLogTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private SleepLog sleepLog;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("SleepTrackerJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		sleepLog = em.find(SleepLog.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		sleepLog = null;
	}

	@Test
	void test() {
		assertEquals(1, sleepLog.getId());
	}

}
