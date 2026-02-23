# 🔥 FINAL STEP - Add Firewall Rule

## ✅ Everything is Ready Except Firewall

Your setup is complete:
- ✅ Backend configured for network access
- ✅ Frontend updated to use IP: `192.168.1.8`
- ✅ Both servers restarted
- ✅ Changes pushed to GitHub

## ⚠️ ONE FINAL STEP REQUIRED

You need to add a Windows Firewall rule to allow port 5000.

### Quick Method (30 seconds):

1. **Right-click on Command Prompt** (search for "cmd" in Start menu)
2. **Select "Run as Administrator"**
3. **Copy and paste this command:**
   ```cmd
   netsh advfirewall firewall add rule name="Node Backend Server Port 5000" dir=in action=allow protocol=TCP localport=5000
   ```
4. **Press Enter**
5. You should see: "Ok."

### That's It!

Now test from another device:
1. Connect your phone/tablet to the SAME WiFi
2. Open browser
3. Go to: `http://192.168.1.8:3000/register`
4. Register a new account
5. It should work! 🎉

## Alternative: Temporarily Disable Firewall to Test

If you want to test first before adding the rule:
1. Open Windows Security
2. Go to Firewall & network protection
3. Turn off firewall temporarily
4. Test registration from another device
5. If it works, turn firewall back on and add the rule above

## Need Help?

See these files for more details:
- `YOUR_NETWORK_SETUP.md` - Your specific setup info
- `QUICK_NETWORK_SETUP.md` - Quick reference
- `NETWORK_ACCESS_GUIDE.md` - Detailed troubleshooting
