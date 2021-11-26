import { useRef } from 'react'
import { Dialog } from '@headlessui/react'

export default function Home() {
  const modalContainerRef = useRef(null)

  return (
    <>
      <div className="page-contents" />
      {/* <div className="dialog-overlay" /> UNCOMMENTING THIS MEANS YOU WILL NEVER SEE THE RED BEHIND THE MODAL */}
      <Dialog className="dialog-container" initialFocus={modalContainerRef} onClose={() => true} open={true}>
        <Dialog.Overlay className="dialog-overlay" />
      </Dialog>
    </>
  )
}
