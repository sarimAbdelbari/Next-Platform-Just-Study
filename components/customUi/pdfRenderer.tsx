"use client";

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ZoomIn, 
  ZoomOut,
  Loader2
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError("Failed to load PDF document. Please check if the URL is accessible and try again.");
    setIsLoading(false);
  }

  const previousPage = () => {
    setPageNumber(page => Math.max(1, page - 1));
  };

  const nextPage = () => {
    setPageNumber(page => Math.min(numPages || page, page + 1));
  };

  const zoomIn = () => {
    setScale(scale => Math.min(2, scale + 0.1));
  };

  const zoomOut = () => {
    setScale(scale => Math.max(0.5, scale - 0.1));
  };

  const handleDownload = () => {
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading PDF:', error);
      setError("Failed to download the PDF. Please try again later.");
    }
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= (numPages || 1)) {
      setPageNumber(value);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-4 space-y-4">
      {error && (
        <Alert variant="destructive" className="mb-4 w-full">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap items-center justify-center gap-2 w-full mb-4">
        <Button
          variant="outline"
          onClick={previousPage}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          <Input
            type="number"
            min={1}
            max={numPages || 1}
            value={pageNumber}
            onChange={handlePageInput}
            className="w-16 text-center"
          />
          <span className="text-sm text-muted-foreground">
            of {numPages || '-'}
          </span>
        </div>

        <Button
          variant="outline"
          onClick={nextPage}
          disabled={pageNumber >= (numPages || 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={zoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="outline" onClick={zoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>

      <div className="relative w-full overflow-auto border rounded-lg bg-white">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          }
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="max-w-full h-auto"
          />
        </Document>
      </div>
    </div>
  );
}