import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { SHARE_URL } from "../config"
import axios from "axios"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

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

      <Button onClick={async () => {
        const response = await axios.post(`${SHARE_URL}`, {
          share: true
        }, {
          headers: {
              "Authorization": localStorage.getItem("token")
          }
        });
        const shareUrl = `http://localhost:5173/brain/share/${response.data.hash}`;
        alert(shareUrl);
      }} variant="secondary" text="Share Brain" startIcon={<ShareIcon />}/>
      </div>

      <div className="flex gap-4 flex-wrap mt-4">
        {contents.map(({type, link, title}) => <Card 
        title={title} 
        type={type} 
        link={link} 
      
      />)}

      </div>
    </div>
    
  </div>
}