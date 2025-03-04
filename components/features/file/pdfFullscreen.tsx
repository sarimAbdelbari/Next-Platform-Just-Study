import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";
import { Document, Page } from "react-pdf";
import { errorToast } from "@/components/utils/toastNotification";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfFullscreenProps {
  fileUrl: string;
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.8);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error: Error) => {
    errorToast("Failed to load PDF. Please check if the URL is accessible and try again.");
  };

  const previousPage = () => {
    setPageNumber((page) => Math.max(1, page - 1));
  };

  const nextPage = () => {
    setPageNumber((page) => Math.min(numPages || page, page + 1));
  };

  const zoomIn = () => {
    setScale((scale) => Math.min(2, scale + 0.1));
  };39

  const zoomOut = () => {
    setScale((scale) => Math.max(0.2, scale - 0.1));
  };

  const handleDownload = () => {
    try {
      window.open(fileUrl, "_blank");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      errorToast("Failed to download the PDF. Please try again later.");
    }
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= (numPages || 1)) {
      setPageNumber(value);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" className="gap-1.5" aria-label="fullscreen">
          <Expand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh] overflow-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 w-full">
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
              of {numPages || "-"}
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
        <DialogTitle>PDF Viewer</DialogTitle>

        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
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
      </DialogContent>
    </Dialog>
  );
};

export default PdfFullscreen;