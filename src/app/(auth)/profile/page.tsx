"use client";

import { updateUser } from "@/lib/auth-clients";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const shell =
  "rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white p-4 ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10";

const field =
  "rounded-xl border border-border/80 bg-surface shadow-sm ring-1 ring-black/5 transition-[box-shadow,border-color] focus-visible:ring-2 focus-visible:ring-neutral-400/25 dark:ring-white/10 dark:focus-visible:ring-neutral-500/30";

export default function CustomStyles() {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: Record<string, string>= {};
     formData.forEach((value, key) => {
      userData[key] = value.toString();
    })
    alert("Form submitted successfully!");

    const resdata = await updateUser({
        name:userData.name
    })
    console.log('After update your profile',resdata);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset className={shell}>
        <Fieldset.Legend className="font-medium text-neutral-800 dark:text-neutral-100">
          Profile Settings
        </Fieldset.Legend>
        <Description className="text-neutral-600 dark:text-neutral-400">
          Update your profile information.
        </Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input className={field} placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input className={field} placeholder="Enter your email" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
    </div>
    
  );
}