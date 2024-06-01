import SimpleInput from '@/app/ui/simple/simple-input';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        simpleValue?: string;
    };
}) {
    const simpleValue = Number(searchParams?.simpleValue) || 41;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Simple Calculator</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <SimpleInput placeholder="Enter a number to add 1" />
            </div>
            <Suspense key={simpleValue} fallback={<SimpleSkeleton />}>
                <SimpleValue value={simpleValue} />
            </Suspense>

            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}

function SimpleSkeleton() {
    return (
        <p>Skeleton Value</p>
    );
}

async function SimpleValue({ value }: { value: number }) {
    noStore();

    return (
        <p>{value + 1}</p>
    );
}
