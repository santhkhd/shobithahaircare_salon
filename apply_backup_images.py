import json
import base64
import os
import sys

def apply_backup(backup_path='shobitha-custom-images-backup.json'):
    if not os.path.exists(backup_path):
        print(f"File not found: {backup_path}")
        return

    # Load mapping from src/data/service_images.json
    with open('src/data/service_images.json', 'r', encoding='utf-8') as f:
        meta = json.load(f)
    
    path_map = {}
    for img_entry in meta.get('images', []):
        s_id = img_entry.get('service_id')
        rel_path = img_entry.get('relative_path') # e.g. /images/services/01-haircuts-and-styling/basic-haircut.webp
        if s_id and rel_path:
            # strip leading slash
            clean_path = rel_path.lstrip('/')
            path_map[s_id] = os.path.join('public', clean_path)

    # Load backup JSON
    with open(backup_path, 'r', encoding='utf-8') as f:
        backup = json.load(f)

    custom_images = backup.get('customServiceImages', backup)
    saved_count = 0

    for service_id, data_url in custom_images.items():
        if not data_url or not isinstance(data_url, str):
            continue

        if data_url.startswith('data:image/'):
            # Extract header and base64 payload
            try:
                header, b64_str = data_url.split(',', 1)
                img_bytes = base64.b64decode(b64_str)

                target_file_path = path_map.get(service_id)
                if not target_file_path:
                    # fallback generic path
                    target_file_path = os.path.join('public', 'images', 'services', f'{service_id}.webp')

                # Ensure parent directory exists
                os.makedirs(os.path.dirname(target_file_path), exist_ok=True)

                with open(target_file_path, 'wb') as img_out:
                    img_out.write(img_bytes)

                print(f"✓ Saved permanent image for '{service_id}' -> {target_file_path} ({len(img_bytes)} bytes)")
                saved_count += 1
            except Exception as e:
                print(f"Error saving {service_id}: {e}")
        else:
            print(f"Skipping non-base64 URL for {service_id}: {data_url[:50]}...")

    print(f"\nDone! Successfully saved {saved_count} permanent image(s) to public/images/services/.")
    print("Run git commit and push to deploy live worldwide.")

if __name__ == '__main__':
    arg_file = sys.argv[1] if len(sys.argv) > 1 else 'shobitha-custom-images-backup.json'
    apply_backup(arg_file)

