import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";

export const welcome = async (req: Request, res: Response) => {
  try {
    // Membaca file HTML dengan path yang benar
    const filePath = path.resolve(__dirname, './../../index.html');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Mengirim konten file sebagai respons
    res.send(fileContent);
  } catch (error) {
    // Menangani kesalahan jika file tidak ditemukan atau kesalahan lainnya
    console.error('Error reading file:', error);
    res.status(500).send('Internal Server Error');
  }
};
