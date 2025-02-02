"use client";

import { useState, useEffect } from 'react';
import { Copy, CopyCheck, Eye } from 'lucide-react';

interface PrimaryDataItem {
  number: number;
  unicode: string;
  value: string;
  preview: string;
}

interface SecondaryDataItem {
  id: number;
  value: string;
  number: number;
  status: 'valid' | 'invalid';
  preview: string;
}

type DataItem = PrimaryDataItem | SecondaryDataItem;

interface DataTableProps {
  tableType: 'primary' | 'secondary';
}

export default function DataTable({ tableType }: DataTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [items, setItems] = useState<DataItem[]>([]);

  // Generate items based on table type
  const generateItems = (): DataItem[] => {
    const itemsObject: { [key: number]: DataItem } = {};

    if (tableType === 'primary') {
      for (let index = 0; index < 300; index++) {
        const charCode = 0x0020 + index;
        itemsObject[index] = {
          number: index + 1,
          unicode: `U+${charCode.toString(16).toUpperCase().padStart(4, '0')}`,
          value: String.fromCharCode(charCode),
          preview: `Character preview for ${String.fromCharCode(charCode)}`
        };
      }
    } else {
      for (let index = 0; index < 300; index++) {
        itemsObject[index] = {
          id: index + 1,
          value: `Secondary Item ${index + 1}`,
          number: Math.floor(Math.random() * 100),
          status: Math.random() > 0.5 ? 'valid' : 'invalid',
          preview: `Preview content for secondary item ${index + 1}`
        };
      }
    }

    const items = Object.values(itemsObject);
    return items;
  };

  // Generate items only on client-side
  useEffect(() => {
    setItems(generateItems());
  }, [tableType]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (items.length === 0) {
    return (
      <div className="w-full p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="mt-2 text-muted-foreground">Loading table data...</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className={tableType === 'primary' ? "bg-secondary" : "bg-primary"}>
          <tr>
            {tableType === 'primary' ? (
              <>
                <th className="p-4 text-left">No.</th>
                <th className="p-4 text-left">Character</th>
                <th className="p-4 text-left">Unicode</th>
                <th className="p-4 text-left">Preview</th>
                <th className="p-4 text-left">Actions</th>
              </>
            ) : (
              <>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Value</th>
                <th className="p-4 text-left">Number</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Preview</th>
                <th className="p-4 text-left">Actions</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={tableType === 'primary' ? (item as PrimaryDataItem).unicode : (item as SecondaryDataItem).id}
              className="border-b hover:bg-muted/50 transition-colors"
            >
              {tableType === 'primary' ? (
                <>
                  <td className="p-4 text-muted-foreground">{(item as PrimaryDataItem).number}</td>
                  <td className="p-4 text-2xl">{(item as PrimaryDataItem).value}</td>
                  <td className="p-4 font-mono">{(item as PrimaryDataItem).unicode}</td>
                  <td className="p-4">
                    <button
                      onClick={() => setActivePreview(activePreview === item.preview ? null : item.preview)}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {activePreview === item.preview ? 'Hide' : 'View'}
                    </button>
                    {activePreview === item.preview && (
                      <div className="mt-2 p-2 bg-muted rounded-md text-sm">
                        {item.preview}
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => copyToClipboard((item as PrimaryDataItem).value, (item as PrimaryDataItem).unicode)}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      {copiedId === (item as PrimaryDataItem).unicode ? (
                        <>
                          <CopyCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-4">{(item as SecondaryDataItem).id}</td>
                  <td className="p-4">{(item as SecondaryDataItem).value}</td>
                  <td className="p-4">{(item as SecondaryDataItem).number}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${(item as SecondaryDataItem).status === 'valid'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                      }`}>
                      {(item as SecondaryDataItem).status === 'valid' ? (
                        'Valid'
                      ) : (
                        'Invalid'
                      )}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setActivePreview(activePreview === item.preview ? null : item.preview)}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {activePreview === item.preview ? 'Hide' : 'View'}
                    </button>
                    {activePreview === item.preview && (
                      <div className="mt-2 p-2 bg-muted rounded-md text-sm">
                        {item.preview}
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => copyToClipboard((item as SecondaryDataItem).value, String((item as SecondaryDataItem).id))}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      {copiedId === String((item as SecondaryDataItem).id) ? (
                        <>
                          <CopyCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
