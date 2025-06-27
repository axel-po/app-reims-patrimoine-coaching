import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { courseData } from "../../fakeData";

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
              <p className="text-sm font-medium text-slate-900">
                {courseData.instructor}
              </p>
              <Badge
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700"
              >
                <Star className="w-3 h-3 mr-1 fill-current" />
                {courseData.rating}
              </Badge>
            </div>
            <p className="text-xs text-slate-500">
              Conseillère en Gestion de Patrimoine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
