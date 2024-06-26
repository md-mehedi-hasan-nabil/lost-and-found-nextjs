"use client"

import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface CloudinaryWidgetProps {
    onChange: Dispatch<SetStateAction<string>>
}

export default function CloudinaryWidget({ onChange }: CloudinaryWidgetProps) {
    const [resource, setResource] = useState<CloudinaryUploadWidgetResults>();
    const [url, setUrl] = useState<string | null>(null);

    // console.log(resource);
    // console.log(url);

    return (
        <CldUploadWidget
            signatureEndpoint="/api/sign-cloudinary-params"
            onSuccess={(result, { widget }) => {
                setResource(result);

                if ((result?.info as CloudinaryUploadWidgetInfo)?.secure_url) {
                    const url = (result?.info as CloudinaryUploadWidgetInfo)?.secure_url;
                    onChange(url);
                    setUrl(url);
                }
                // widget.close();
            }}
        >
            {({ open }) => {
                function handleOnClick() {
                    setResource(undefined);
                    open();
                }
                return (
                    <div className="flex items-center justify-center w-full">
                        <label
                            onClick={handleOnClick}
                            className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG or JPG
                                </p>
                            </div>
                        </label>
                        {url && <Image src={url} className="rounded-2xl ml-4" width={360} height={200} alt="" />}
                    </div>
                );
            }}
        </CldUploadWidget>
    );
}
