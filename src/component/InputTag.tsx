import React, { useState } from "react";
import Input from "./Input";
import Tag from "./Tag";

const InputTag = () => {
  const [value, setValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Verifica se l'utente ha premuto il tasto "Enter" e se il valore dell'input non è vuoto o composto solo da spazi
    if (event.key === "Enter" && value.trim()) {
      // Aggiunge il valore dell'input come nuovo tag alla lista esistente
      const updatedTags = [...tags, value.trim()];

      // Aggiorna lo stato dei tag con il nuovo array che include il nuovo tag
      setTags(updatedTags);

      // Resetta il valore dell'input dopo aver aggiunto il tag
      setValue("");

      // Impedisce al form di inviare il dato e ricaricare la pagina
      event.preventDefault();
    }
  };

  const handleRemoveTag = (index: number) => {
    // Copia l'array dei tag escludendo l'elemento con l'indice specificato
    const updatedTags = tags.filter(
      (_, currentIndex) => currentIndex !== index
    );

    // Aggiorna lo stato dei tag con il nuovo array senza il tag rimosso
    setTags(updatedTags);
  };
  return (
    <>
      <Input
        label="Argomenti"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} onClick={() => handleRemoveTag(index)} />
        ))}
      </div>
    </>
  );
};

export default InputTag;
