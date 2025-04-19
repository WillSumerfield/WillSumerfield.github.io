import os
import re


def find_and_update_versions():
    """
    Find all files in the directory and subdirectories, replace version numbers,
    and increment the version appropriately.
    """
    version_pattern = re.compile(r'\?v=(\d+\.\d+)')
    version_increment = 0.1
    files_processed = 0

    for root, _, files in os.walk("."):
        for file in files:
            file_path = os.path.join(root, file)
            if not os.path.isfile(file_path):
                continue
            
            # Only process HTML, JS, and CSS files
            if not file.endswith(('.html', '.js', '.css')):
                continue
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            updated_content = []
            for match in version_pattern.finditer(content):
                current_version = float(match.group(1))
                new_version = round(current_version + version_increment, 1)
                updated_content.append((match.group(1), f"{new_version}"))

            for old_version, new_version in updated_content:
                content = content.replace(old_version, new_version)

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    find_and_update_versions()

