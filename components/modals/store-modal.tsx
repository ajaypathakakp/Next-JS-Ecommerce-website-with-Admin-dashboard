"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const StoreModal = useStoreModal();

    return ( 
        <Modal 
            title="Add a Store"
            description="New Store form"
            isOpen={StoreModal.isopen}
            onClose={StoreModal.onClose}
        >
            Create Store Form
        </Modal>
    );
};