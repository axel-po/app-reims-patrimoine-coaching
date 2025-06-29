import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Author() {
  return (
    <div className="p-6 border-t border-slate-100">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-slate-900">Author</h4>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
              CL
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-slate-900">Maxime Godon</p>
            </div>
            <p className="text-xs text-slate-500">
              Conseiller en Gestion de Patrimoine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
