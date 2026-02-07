import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Image as ImageIcon } from 'lucide-react';

export default function CreatePage() {
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Create New Post</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <Label htmlFor="image-upload" className="text-slate-700 mb-2 block">
              Upload Artwork
            </Label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-teal-500 transition-colors cursor-pointer">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {preview ? (
                  <img src={preview} alt="Preview" className="max-h-96 mx-auto rounded-lg" />
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <ImageIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">Click to upload</p>
                      <p className="text-sm text-slate-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="caption" className="text-slate-700">Caption</Label>
            <Textarea
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption for your artwork..."
              className="mt-1 min-h-32 bg-slate-50 border-slate-200"
            />
          </div>

          <div>
            <Label htmlFor="tags" className="text-slate-700">Tags</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="art, painting, digital (comma separated)"
              className="mt-1 bg-slate-50 border-slate-200"
            />
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Publish
            </Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
