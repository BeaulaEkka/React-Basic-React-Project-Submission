import { Center, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Cards from "../components/Cards";
export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const text = Object.values(recipe).flat().join(" ").replace(/-/g, " ");

    return text.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleSearchChanges = (event) => {
    return setSearchField(event.target.value);
  };

  return (
    <Center mb="3rem">
      <VStack>
        <Input
          bg="white"
          m="2rem"
          placeholder="Search Recipes"
          onChange={handleSearchChanges}
          w="60%"
        />
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={5}
          transition="all 0.3s ease"
          spacingX={5}
        >
          {filteredRecipes.map((recipe) => (
            <Cards
              clickFn={clickFn}
              key={recipe.label}
              recipe={recipe}
              minHeight="250px"
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
