import { BookmarkIcon, DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { AspectRatio, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { ImageCard as CardType } from "../types";
import { downloadImage } from "../helpers/download";
import { toast } from "sonner";
import { useSaveImages } from "../stores/useSaveImages";
import { motion } from "framer-motion";

interface ImageCardProps {
  card: CardType;
}

export function ImageCard({ card }: ImageCardProps) {
  const saveCard = useSaveImages((state) => state.saveCard);
  const removeCard = useSaveImages((state) => state.removeCard);
  const cards = useSaveImages((state) => state.cards);
  function handleDownload() {
    downloadImage(card.download_url, "newFileName")
      .then(() => {
        toast.success("Downloaded!!");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }

  const isSavedAlready = cards.find((i) => i.id === card.id);
  function handleSave() {
    if (isSavedAlready) {
      removeCard(isSavedAlready.id);
      return toast.success("Image has been deleted!");
    }
    saveCard(card);

    toast.success("Image has been saved!");
  }
  return (
    <motion.div layout key={card.id}>
      <Card>
        <AspectRatio ratio={16 / 8}>
          <Link to={`/images/${card.id}`}>
            <img
              src={card.download_url}
              alt={`A picture of the author ${card.author}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: 6,
              }}
            />
          </Link>
        </AspectRatio>
        <Flex mt="4" justify="between">
          <Text weight="bold">Author: {card.author}</Text>
          <Flex gap="3">
            <IconButton
              onClick={handleSave}
              variant="outline"
              color={isSavedAlready ? "red" : "blue"}
            >
              {isSavedAlready ? <TrashIcon color="red" /> : <BookmarkIcon />}
            </IconButton>

            <IconButton onClick={handleDownload}>
              <DownloadIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Card>
    </motion.div>
  );
}
