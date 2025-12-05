import { PdfCard } from '@/components/shared/pdf-card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { pdfs } from '@/constants/data';
import { Filters } from '@/components/browse/filters';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background';

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BubbleBackground
        className="mb-12 py-16 md:py-24 rounded-xl overflow-hidden text-center"
        interactive
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 font-headline">
            Sri Lanka's Digital <br />
            <span>Learning Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto">
            Access thousands of educational resources, share knowledge, and excel in your studies.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search for subjects, past papers, notes..."
              className="w-full h-14 pl-12 pr-4 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 rounded-xl focus-visible:ring-red-500 focus-visible:border-red-500 text-base"
            />
          </div>
        </div>
      </BubbleBackground>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden lg:block">
          <Filters />
        </aside>
        <main>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {pdfs.map((pdf) => (
              <PdfCard key={pdf.id} pdf={pdf} />
            ))}
          </div>
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
}
