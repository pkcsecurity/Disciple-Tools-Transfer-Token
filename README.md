# Disciple-Tools-Trasfer-Token
Generates a Disciple.Tools transfer token to be used in the Zapier integration

## How to use Zapier with Disciple.Tools


# Developer's Guide
If you wish to expand on this, feel free. This is a basic server that will generate a transfer token. It was 
built for easier integration with Zapier (Session Auth).

### How to Setup Zapier Integration
This is a how to guide to setup the Zapier Integration

### Running the Server
This is a simple Express Node server with one POST route. Setup is easy.
1. Clone repo
2. run `npm update`
3. run `node app.js`
4. Send post to `localhost:3000`

### What the Server expects (JSON)
All information can be found when looking at your Site Link: `https://[Your Domain ex: example.disciple.tools]/wp-admin/edit.php?post_type=site_link_system`
- token : Token from the Site Link
- site1 : Site 1 from the Site Link
- site 2 : Site 2 from the Site Link
