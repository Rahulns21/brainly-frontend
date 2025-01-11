import { useState } from "react"
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return <div className="p-4">

    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />

    <div className="flex justify-end gap-2">
    <Button variant="primary" text="Add content" startIcon={<PlusIcon />}/>

    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}/>
    </div>

    <div className="flex gap-4">
      <Card title="this is a test tweet" type="twitter"
      link="https://x.com/balunatesh/status/1877369569804710115" />

      <Card title="this is a test video" type="youtube"
      link="https://www.youtube.com/watch?v=cndvHtv15_U" />
    </div>
    
  </div>
}

export default App