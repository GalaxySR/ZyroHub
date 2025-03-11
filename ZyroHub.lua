local Games = loadstring(game:HttpGet("https://raw.githubusercontent.com/GalaxySR/ZyroHub/refs/heads/main/GameList.lua?token=GHSAT0AAAAAADAIMEKLNYZL6ZEANMIK2JEKZ6P4J5Q"))()

for PlaceID, Execute in pairs(Games) do
    if PlaceID == game.PlaceId then
        loadstring(game:HttpGet(Execute))()
    end
end