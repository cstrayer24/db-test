import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "libs/prisma";

import { argon2id, hash } from "argon2";
import * as argon from "argon2";
async function submitHandle(req: NextApiRequest, res: NextApiResponse) {
  const { content } = req.query;

  if (req.method !== "POST") {
    return res.status(404).json("not found");
  }

  const { email, password } = req.body;
  const hashed = await hash(password);
  const resp = await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  });
  res.status(200).json({ resp });
}

export default submitHandle;
