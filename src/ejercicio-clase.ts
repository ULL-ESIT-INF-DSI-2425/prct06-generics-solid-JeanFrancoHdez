/**
 * Enum representing the possible actions a user can perform.
 */
export enum UserActions {
  LOGIN = "Inicio de sesión",
  LOGOUT = "Cierre de sesión",
  RESET_PASSWORD = "Restablecer contraseña",
  UPDATE_PROFILE = "Actualizar perfil",
  DELETE_ACCOUNT = "Eliminar cuenta",
}

/**
 * Type representing a log entry.
 */
export type Actions = [string, UserActions, Date];

export class Logger implements Iterable<Actions> {
  /** Singleton instance of the Logger class. */
  private static instance: Logger;

  /**
   * Private constructor to prevent direct instantiation.
   * @param logs - Array to store log entries.
   */
  private constructor(private logs: Actions[] = []) {}

  /**
   * Retrieves the singleton instance of the Logger class.
   * If it doesn't exist, it creates a new one.
   * @returns The singleton instance of the Logger class.
   */
  public static getloggerInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Clears all log entries.
   */
  public clearLogs(): void {
    this.logs = [];
  }

  /**
   * Logs a user action.
   * @param user - The username associated with the action.
   * @param action - The action performed by the user.
   * @param date - The date and time when the action occurred.
   */
  public logAction(user: string, action: UserActions, date: Date): void {
    console.log(`${user}: ${action} at ${date.toISOString()}`);
    this.logs.push([user, action, date]);
  }

  /**
   * Retrieves all log entries.
   * @returns An array of all log entries.
   */
  public getLogs(): Actions[] {
    return this.logs;
  }

  /**
   * Retrieves all log entries for a specific user.
   * @param user - The username to filter log entries by.
   * @returns An array of log entries for the specified user.
   */
  public getActionsByUser(user: string): Actions[] {
    return this.logs.filter(log => log[0] === user);
  }

  /**
   * Retrieves all log entries for a specific action type.
   * @param action - The action type to filter log entries by.
   * @returns An array of log entries for the specified action type.
   */
  public getActionsByType(action: UserActions): Actions[] {
    return this.logs.filter(log => log[1] === action);
  }

  /**
   * Retrieves all log entries within a specific date range.
   * @param startDate - The start date of the range.
   * @param endDate - The end date of the range.
   * @returns An array of log entries within the specified date range.
   */
  public getActionsBetweenDates(startDate: Date, endDate: Date): Actions[] {
    return this.logs.filter(log => log[2] >= startDate && log[2] <= endDate);
  }

  /**
   * Makes the Logger class iterable by implementing the [Symbol.iterator] method.
   * This allows iteration over the log entries stored in the `logs` array.
   * @returns An iterator for the log entries.
   */
  [Symbol.iterator](): IterableIterator<Actions> {
    return this.logs.values();
  }
}