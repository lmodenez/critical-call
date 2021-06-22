import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Tickets from '../models/Tickets';

class TicketsController {
  async get(req: Request, res: Response) {
    const repository = getRepository(Tickets);

    const tickets = await repository.find();

    if (!tickets) return res.sendStatus(409);

    return res.json(tickets);
  }

  async post(req: Request, res: Response) {
    const repository = getRepository(Tickets);
    const ticket = req.query;

    if (ticket) {
      await repository
        .createQueryBuilder()
        .insert()
        .into(Tickets)
        .values({
          mecanismo: 'Suporte',
          solicitante: `${ticket.solicitante}`,
          categoria: `${ticket.categoria}`,
          subcategoria: `${ticket.subcategoria}`,
        })
        .execute();
      return res.json('ok');
    } else {
      res.sendStatus(400);
    }
  }

  async delete(req: Request, res: Response) {
    const repository = getRepository(Tickets);
    const id = req.params;

    const ticketExists = await repository.findOne(id);

    if (ticketExists) {
      await repository.delete(id);
      return res.json('Chamado deletado');
    } else {
      res.status(404).send('Chamado não encontrado! ❌');
    }
  }
}

export default new TicketsController();
