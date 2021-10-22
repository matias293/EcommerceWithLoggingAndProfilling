import {format, createLogger, transports} from 'winston';
const { timestamp, combine, printf, errors,colorize } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${ message}`;
  });

  const logger = createLogger({
    format: combine(
      timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss',
      }),
      colorize(),
      printf((info) => `${info.level} |  ${[info.timestamp]} | ${info.message}`)
    ),
      transports: [
          new transports.Console({level :'info'}),
          new transports.File({
            filename: `${__dirname}/logs/error-2.log`,
            level: 'error',
          }),
          new transports.File({
            filename: `${__dirname}/logs/warn-2.log`,
            level: 'warn'
          }),

        ],
  });

  export default logger
