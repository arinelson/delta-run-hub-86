
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import AvatarSelector from "./AvatarSelector";
import ColorSelector from "./ColorSelector";
import { User } from "@/lib/auth";

interface ProfileSettingsProps {
  user: User;
  onUpdate: (updates: Partial<User>) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user, onUpdate }) => {
  const [localUser, setLocalUser] = React.useState<User>(user);

  const handleAvatarChange = (avatarId: number) => {
    setLocalUser(prev => ({ ...prev, avatarId }));
  };

  const handleColorChange = (themeColor: string) => {
    setLocalUser(prev => ({ ...prev, themeColor }));
  };

  const handleSaveChanges = () => {
    onUpdate({
      avatarId: localUser.avatarId,
      themeColor: localUser.themeColor
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Personalize seu perfil</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-center font-semibold text-lg">Escolha seu avatar</h3>
            <AvatarSelector 
              selectedId={localUser.avatarId} 
              onChange={handleAvatarChange} 
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-center font-semibold text-lg">Personalizar Cores</h3>
            <ColorSelector 
              selectedColor={localUser.themeColor} 
              onChange={handleColorChange} 
            />
          </div>

          <Button onClick={handleSaveChanges} className="w-full mt-4">
            Salvar Alterações
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettings;
