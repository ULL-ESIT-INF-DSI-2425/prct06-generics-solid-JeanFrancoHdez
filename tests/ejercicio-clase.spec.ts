import { describe, expect, test, beforeEach } from "vitest";
import { Logger, UserActions } from "../src/ejercicio-clase";

describe("Logger", () => {
  let logger: Logger;

  beforeEach(() => {
    logger = Logger.getloggerInstance();
    logger.clearLogs();
  });

  test("should create a singleton instance", () => {
    const logger1 = Logger.getloggerInstance();
    const logger2 = Logger.getloggerInstance();
    expect(logger1).toBe(logger2);
  });

  test("should log an action", () => {
    const date = new Date();
    logger.logAction("user1", UserActions.LOGIN, date);
    const logs = logger.getLogs();
    expect(logs).toHaveLength(1);
    expect(logs[0]).toEqual(["user1", UserActions.LOGIN, date]);
  });

  test("should retrieve logs by user", () => {
    const date = new Date();
    logger.logAction("user1", UserActions.LOGIN, date);
    logger.logAction("user2", UserActions.LOGOUT, date);
    const user1Logs = logger.getActionsByUser("user1");
    expect(user1Logs).toHaveLength(1);
    expect(user1Logs[0]).toEqual(["user1", UserActions.LOGIN, date]);
  });

  test("should retrieve logs by action type", () => {
    const date = new Date();
    logger.logAction("user1", UserActions.LOGIN, date);
    logger.logAction("user2", UserActions.LOGIN, date);
    logger.logAction("user3", UserActions.LOGOUT, date);
    const loginLogs = logger.getActionsByType(UserActions.LOGIN);
    expect(loginLogs).toHaveLength(2);
    expect(loginLogs).toEqual([
      ["user1", UserActions.LOGIN, date],
      ["user2", UserActions.LOGIN, date],
    ]);
  });

  test("should retrieve logs between two dates", () => {
    const date1 = new Date("2025-03-01T10:00:00");
    const date2 = new Date("2025-03-15T10:00:00");
    const date3 = new Date("2025-03-20T10:00:00");

    logger.logAction("user1", UserActions.LOGIN, date1);
    logger.logAction("user2", UserActions.LOGOUT, date2);
    logger.logAction("user3", UserActions.RESET_PASSWORD, date3);

    const logsInRange = logger.getActionsBetweenDates(
      new Date("2025-03-01T00:00:00"),
      new Date("2025-03-15T23:59:59")
    );

    expect(logsInRange).toHaveLength(2);
    expect(logsInRange).toEqual([
      ["user1", UserActions.LOGIN, date1],
      ["user2", UserActions.LOGOUT, date2],
    ]);
  });

  test("should return an empty array if no logs match the user", () => {
    const date = new Date();
    logger.logAction("user1", UserActions.LOGIN, date);
    const userLogs = logger.getActionsByUser("nonexistentUser");
    expect(userLogs).toHaveLength(0);
  });

  test("should return an empty array if no logs match the action type", () => {
    const date = new Date();
    logger.logAction("user1", UserActions.LOGIN, date);
    const actionLogs = logger.getActionsByType(UserActions.DELETE_ACCOUNT);
    expect(actionLogs).toHaveLength(0);
  });

  test("should return an empty array if no logs are in the date range", () => {
    const date = new Date("2025-03-01T10:00:00");
    logger.logAction("user1", UserActions.LOGIN, date);
    const logsInRange = logger.getActionsBetweenDates(
      new Date("2025-03-02T00:00:00"),
      new Date("2025-03-03T23:59:59")
    );
    expect(logsInRange).toHaveLength(0);
  });
});

describe('Logger Iterable Tests', () => {
  let logger: Logger;

  beforeEach(() => {
    logger = Logger.getloggerInstance();
    logger.clearLogs();
  });

  test('should iterate over log entries using for...of', () => {
    const date1 = new Date('2025-03-20T10:00:00Z');
    const date2 = new Date('2025-03-20T11:00:00Z');
    logger.logAction('user1', UserActions.LOGIN, date1);
    logger.logAction('user2', UserActions.LOGOUT, date2);

    const expectedLogs = [
      ['user1', UserActions.LOGIN, date1],
      ['user2', UserActions.LOGOUT, date2],
    ];

    const result: [string, UserActions, Date][] = [];
    for (const log of logger) {
      result.push(log);
    }

    expect(result).toEqual(expectedLogs);
  });

  test('should not iterate over an empty logger', () => {
    const result: [string, UserActions, Date][] = [];
    for (const log of logger) {
      result.push(log);
    }

    expect(result).toEqual([]);
  });
});