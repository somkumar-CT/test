import express, { Express, Request, Response } from 'express';
import User from './routes/user';
import { DateTime } from 'luxon';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const db = new PrismaClient();

const app: Express = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/user', User);

app.get('/healthtest', async (req, res) => {
  res.send('hello');
});

app.post('/', async (req: Request, res: Response) => {
  const { checkInTime } = req.body;

  // const time = '2024-04-30T13:00:00.000Z';
  // const timeToCheck = DateTime.fromISO(time);

  const bookings = await db.bookings.findMany({
    where: {
      AND: [
        {
          startTime: {
            lte: checkInTime,
          },
        },
        {
          endTime: {
            gt: checkInTime,
          },
        },
      ],
    },
  });

  // console.log(bookings);

  console.log(bookings.length, !!!bookings.length);

  if (!!!bookings.length) {
    console.log('no booking at that time');
    const data = await db.bookings.create({
      data: {
        podsId: 1,
        startTime: checkInTime,
        endTime: DateTime.fromISO(checkInTime).plus({ hours: 3 }).toISO() ?? '',
      },
    });

    return res.send('no booking at that time');
  }
  console.log('booking at that time');
  return res.send('booking at that time');
  // podBooking.forEach((item) => {
  //   const startTime = DateTime.fromISO(item.startTime);
  //   const endTime = DateTime.fromISO(item.endTime);

  //   console.log({
  //     startTime: startTime.toFormat('hh:mm'),
  //     timeToCheck: timeToCheck.toFormat('hh:mm'),
  //     endTime: endTime.toFormat('hh:mm'),
  //   });

  //   if (startTime < timeToCheck && timeToCheck < endTime) {
  //     console.log('cannot book');
  //   } else {
  //     console.log('slot available');
  //   }
  // });
});

app.get('/seed', async (_, res) => {
  try {
    const data = await db.container.create({
      data: {
        name: 'Kochi',
        pods: {
          create: {
            title: 'First',
          },
        },
      },
    });
    res.send('seed completed');
  } catch (error) {
    console.log(error);
    res.send('Something went wrong');
  }
});

app.get('/getAll', async (req, res) => {
  const currentTime = '2024-05-04T00:00:00.000Z';

  const currentHour = DateTime.fromISO(currentTime).hour;

  const data = await db.bookings.findMany({
    where: {
      AND: [
        {
          podsId: 1,
        },
        {
          startTime: {
            gte: currentTime,
          },
        },
        {
          endTime: {
            lte:
              DateTime.fromISO(currentTime).plus({ hours: 24 }).toISO() ?? '',
          },
        },
      ],
    },
  });
  // console.log({ data });

  const finalData = [];
  finalData.push(
    data.map((item) => {
      const startTime = DateTime.fromJSDate(item.startTime);
      const endTime = DateTime.fromJSDate(item.endTime);
      const diff = endTime.diff(startTime).as('hour');
      console.log({
        startTime: startTime.hour,
        endTime: endTime.hour,
        diff: endTime.diff(startTime).as('hour'),
      });

      for (let i = 0; i < diff; i++) {
        console.log(i);
        finalData.push({
          id: item.id,
          time:
            DateTime.fromJSDate(item.startTime).setZone('Asia/Calcutta').hour +
            i,
        });
      }
    })
  );

  console.log(finalData);

  res.send(finalData);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
