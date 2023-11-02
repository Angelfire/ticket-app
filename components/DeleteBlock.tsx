"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteBlock = ({ id }: { id: string }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to delete ticket", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <X className="h-4 w-4 text-red-400 hover:cursor-pointer hover:text-red-200" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete ticket</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this ticket?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="destructive"
              onClick={() => deleteTicket()}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBlock;
