# DataStore: A Quick Guide.

Last Updated March 2, 2018

If you find a problem, mistake, or have any questions, please DM me on Discord (Josh Mad Scientist#6360), Twitter(@scientiist), or ROBLOX (MadScient1st).


Before we start, please note that this tutorial assumes previous Lua scripting capabilites, and at least a basic understanding of the ROBLOX API.

With that out of the way, let's get started.

## What is DataStore?

In your game, you may find yourself wanting to save information, such as a player's statistics, between play sessions. In the old days, this could be accomplished using what was called DataPersistence. 

However, ROBLOX now has the DataStore Service, which has replaced the depricated DataPersistence. DataStore has a number of advantages, such as information not being "bound" to individual players, (DataPersistence functions were exposed through the player, i.e `player:SaveString(), player:LoadInstance(), etc.`), and data being shared across all places of a Game (Universe).

## How does it work?

DataStore is essentially a database for your game, made easy to use via the ROBLOX API. You use the DataStoreService to grab GlobalDataStores and OrderedDataStores, which you use to read and write information that will be preserved. 

```lua
DataStoreService = game:GetService("DataStoreService")

-- once required, you call GetDataStore, and supply the DataStore's name, as well as the scope as arguments.
local someDataStore = DataStoreService:GetDataStore("DataStoreName", "ScopeOfThisDataStore")


-- DataStore information is stored as key:value pairs. GetAsync requires the key string, and will return the value. If this is not already set, it will return nil.
local ourNumber = someDataStore:GetAsync("OurNumber")

print(ourNumber)
```

## The Limitations

DataStore has some limits that you need to be aware of, and can avoid. I'll cover a few of the more common ones here. Unlike DataPersistence, you cannot store Instances. According to the wiki: "Values must be one of the following: float, boolean, interger, a utf-8 String", meaning that you can't directly save things like Parts, Vector3's, etc. This is actually a very good thing when you think about it, why would you want to save the instance directly? Instead, save "defining" information about the instance. 

As an example, if you wanted to save the items in a player's backpack: instead of the instances, save the item's name or ID into an `Inventory` table. When the player joins again, load their `Inventory` table from the datastore, compare the names inside that table with a folder of items in some storage place, such as ReplicatedStorage or ServerStorage. If the names are identical, copy the item into the player's backpack.

Another common mistake is trying to save a table with mixed indices.

```lua
tableWeAreTryingToSave = {
      [1] = "Hello",
      [2] = "World,
      ["David Bowie"] = "Station to Station",
      ["Pink Floyd"] = "The Wall"
}
```

The above table will not save properly, because some indices are numbers, and some are strings. DataStore requires a table to have unifom indices, so it has to be all-number (often called an array), or all-string (often called a dictionary). Otherwise, DataStore will abruptly cut off the table and you will lose information.
    
Finally, DataStoreService cannot be used from the client. This means no running it in LocalScripts, or in your GUI.

## DataStore's errors


## Example 1:

This example will start off simple, I'll just be demonstrating how to set up DataStore, and we'll be keeping track of whether or not a player is new to the game.


## Example 2: 

This one should be a little more fun. We are going to save and load the player's position.


## OrderedDataStore


--
## ROBLOX APIs used in this tutorial:

http://wiki.roblox.com/index.php?title=API:Class/OrderedDataStore

http://wiki.roblox.com/index.php?title=API:Class/GlobalDataStore

http://wiki.roblox.com/index.php?title=API:Class/DataStoreService


## Useful Reading:

http://wiki.roblox.com/index.php?title=Datastore_Errors
