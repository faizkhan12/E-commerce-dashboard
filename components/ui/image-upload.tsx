"use client";

import { ReactElement, useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { ImagePlusIcon, Trash } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return <></>;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value?.map((url) => (
          <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => onRemove(url)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            <Image src={url} fill className="object-cover" alt="Image" />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="hi8zzmtx">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlusIcon className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;