#CodeGarden 2022 - Micro:Bit assistant
##  Background

Created as part of the [CodeGarden 2022 Challenge](https://umbraco.com/blog/join-the-codegarden-challenge/)

As an additional goal I wanted to use kit that would be available at [CoderDojo](https://coderdojo.com/) so that it could be used or extended on at local CoderDojos using the MakerCode building blocks.

##  Available Actions
* On load shows the icon heart
* On shake flashes the heart icon
* A button press shows direction to CodeGarden, based on being in Manchester which is roughly 45 degree angle away. Please note in [MakeCode Blocks](https://makecode.microbit.org/#) Coordinates are not available 
* B button press display information on CodeGarden
* A + B Button press together sends a #H5YR message to another MicroBit running the same code.

#H5YR stands for "High 5 You Rock". The [H5YR Site](https://h5yr.com/about/) explains more about the hashtag.

The communication between MicroBits is set at the start, when all MicroBits running the code are set to "Group 1", this sets the channel for sending and recieving data.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/rachbreeze/codegarden-2022** and import

## Edit this project ![Build status badge](https://github.com/rachbreeze/codegarden-2022/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/rachbreeze/codegarden-2022** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/rachbreeze/codegarden-2022/raw/main/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Branch Name Notes
Makecode will not import a GitHub repo if the Main branch isn't called "Master"
