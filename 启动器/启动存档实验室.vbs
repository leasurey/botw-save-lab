' ============================================================
'  BOTW V13 launcher (ascii-only on purpose)
' ============================================================
Option Explicit

Dim fso, sh, base, f, ps1
Set fso = CreateObject("Scripting.FileSystemObject")
Set sh  = CreateObject("Shell.Application")

base = fso.GetParentFolderName(WScript.ScriptFullName)
ps1  = ""

' Locate the *.ps1 in this folder (normally the launcher .ps1)
For Each f In fso.GetFolder(base).Files
    If LCase(fso.GetExtensionName(f.Name)) = "ps1" Then
        If ps1 = "" Then ps1 = f.Path
    End If
Next

If ps1 = "" Then
    MsgBox "Launcher .ps1 not found next to this file:" & vbCrLf & base, 16, "BOTW V13"
    WScript.Quit 1
End If

' runas shows the UAC prompt; window style 1 = normal window
sh.ShellExecute "powershell.exe", _
    "-NoLogo -NoProfile -ExecutionPolicy Bypass -File """ & ps1 & """", _
    base, "runas", 1
