import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import '@configs/dotenv';

import swagger from '../swagger.json';

const router = Router();

// Product routes
router.get('/hello', (req: Request, res: Response) => res.json({ ok: true }));

router.get('/env', (req: Request, res: Response) =>
  res.json({ env: `${process.env.TEST}` }),
);

// Swagger docs
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

export { router };
