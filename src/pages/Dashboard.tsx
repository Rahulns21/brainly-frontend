import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />

      <div className="flex justify-end gap-2">
      <Button onClick={() => {
        setModalOpen(true);
      }} variant="primary" text="Add content" startIcon={<PlusIcon />}/>

      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}/>
      </div>

      <div className="flex gap-4">
        <Card title="this is a test tweet" type="twitter"
        link="https://x.com/balunatesh/status/1877369569804710115" />

        <Card title="this is a test video" type="youtube"
        link="https://www.youtube.com/watch?v=cndvHtv15_U" />
      </div>
    </div>
    
  </div>
}