import os
import shutil

for index, fn in enumerate(os.listdir(os.curdir)):
    if fn.endswith('png'):
        shutil.move(fn, f'{index}.png')
