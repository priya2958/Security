import winston from "winston";

const auditLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "audit.log" }),
    new winston.transports.Console(),
  ],
});

auditLogger.stream = {
  write: (message) => {
    auditLogger.info(message.trim());
  },
};

export default auditLogger;
