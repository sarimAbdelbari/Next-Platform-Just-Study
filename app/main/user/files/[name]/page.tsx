import ChatWrapper from "@/components/customUi/chatWrapper";
import PdfRenderer from "@/components/customUi/pdfRenderer";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { redirect, notFound } from "next/navigation";

interface PageProps {
  params: { name?: string };
}

const prisma = new PrismaClient();

const FilePage = async ({ params }: PageProps) => {

  const resolvedParams = await params;
const { name } = resolvedParams;


  if (!name) {
    redirect("/main/user/files"); // Ensure `params.name` is available
  }

  const session = await auth();

  const file = await prisma.file.findFirst({
    where: {
      name: name,
      user: {
        email: session?.user?.email ?? undefined,
      },
    },
  });

  if (!file) {
    notFound(); // Better UX than redirect
  }

  return (
    <section className="flex flex-col gap-3 h-[calc(100vh-84px)]">
      <div className="my-5">
        <h3 className="text-2xl font-semibold font-serif">
          Talk To Your Document:{" "}
          <span className="text-primary text-xl">{name ?? ""}</span>
        </h3>
      </div>
      <div className="h-full flex justify-between xl:flex-row flex-col">
        {/* Left Side */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:px-8 xl:flex-1 xl:pl-6">
            <PdfRenderer url={file?.url} />
          </div>
        </div>
        {/* Right Side */}
        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper fileId={file.id} />
        </div>
      </div>
    </section>
  );
};

export default FilePage;