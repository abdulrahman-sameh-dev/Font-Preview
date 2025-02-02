import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface Item {
  id: number;
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // ✅ المسار الصحيح للملف
    const filePath = join(process.cwd(), 'theFont', 'data.json');

    // ✅ التحقق مما إذا كان الملف موجودًا قبل قراءته
    if (!existsSync(filePath)) {
      throw new Error(`File not found at path: ${filePath}`);
    }

    // ✅ قراءة الملف وتحويله إلى JSON
    const fileContent = readFileSync(filePath, 'utf-8');
    if (!fileContent.trim()) throw new Error("JSON file is empty");

    const jsonData: Item[] = JSON.parse(fileContent);
    if (!Array.isArray(jsonData)) throw new Error("Invalid JSON format");

    res.status(200).json(jsonData);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: "Error reading the JSON file", error: errorMessage });
  }
}
