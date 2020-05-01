Get-ChildItem -Path . |
Where-Object {$_.Extension -eq '.mkv'} |

ForEach-Object {
    $episode = $_.Name.Substring(10, 6)

    $convertedFileName = 'name' + $episode + '.mkv'

    $cmd = 'ffmpeg -i ' + $_.Name + ' -c:v copy -c:a ac3 -b:a 320k ' + $convertedFileName

    echo $cmd

    Invoke-Expression -Command:$cmd
}