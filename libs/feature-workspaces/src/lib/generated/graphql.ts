export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export namespace BasicWorkspace {
  export type Variables = {
    path: string;
  };

  export type Query = {
    __typename?: 'Query';

    workspace: Workspace;
  };

  export type Workspace = {
    __typename?: 'Workspace';

    path: string;

    name: string;
  };
}

export namespace GetDirectoryPath {
  export type Variables = {
    dialogTitle: string;
    dialogButtonLabel: string;
    angularWorkspace: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    selectDirectory: Maybe<SelectDirectory>;
  };

  export type SelectDirectory = {
    __typename?: 'SelectDirectoryResult';

    selectedDirectoryPath: Maybe<string>;

    error: Maybe<string>;
  };
}

export namespace NgNew {
  export type Variables = {
    path: string;
    name: string;
    collection: string;
    newCommand: string[];
  };

  export type Mutation = {
    __typename?: 'Mutation';

    ngNew: Maybe<NgNew>;
  };

  export type NgNew = {
    __typename?: 'CommandStarted';

    id: string;
  };
}

export namespace OpenWorkspace {
  export type Variables = {
    path: string;
  };

  export type Query = {
    __typename?: 'Query';

    workspace: Workspace;
  };

  export type Workspace = {
    __typename?: 'Workspace';

    name: string;
  };
}

export namespace SchematicCollections {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    schematicCollections: SchematicCollections[];
  };

  export type SchematicCollections = {
    __typename?: 'SchematicCollectionForNgNew';

    name: string;

    description: string;

    schema: Schema[];
  };

  export type Schema = {
    __typename?: 'Schema';

    name: string;

    enum: Maybe<string[]>;

    type: string;

    description: string;

    defaultValue: Maybe<string>;

    required: boolean;

    positional: boolean;
  };
}

export namespace SaveRecentAction {
  export type Variables = {
    workspacePath: string;
    projectName: string;
    actionName: string;
    schematicName?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    saveRecentAction: SaveRecentAction[];
  };

  export type SaveRecentAction = {
    __typename?: 'RecentAction';

    actionName: string;

    schematicName: Maybe<string>;
  };
}

export namespace WorkspaceDocs {
  export type Variables = {
    path: string;
  };

  export type Query = {
    __typename?: 'Query';

    workspace: Workspace;
  };

  export type Workspace = {
    __typename?: 'Workspace';

    docs: Docs;
  };

  export type Docs = {
    __typename?: 'Docs';

    workspaceDocs: WorkspaceDocs[];
  };

  export type WorkspaceDocs = {
    __typename?: 'Doc';

    id: string;

    description: Maybe<string>;

    prop: Maybe<string>;
  };
}

export namespace WorkspaceSchematics {
  export type Variables = {
    path: string;
  };

  export type Query = {
    __typename?: 'Query';

    workspace: Workspace;
  };

  export type Workspace = {
    __typename?: 'Workspace';

    schematicCollections: SchematicCollections[];
  };

  export type SchematicCollections = {
    __typename?: 'SchematicCollection';

    name: string;

    schematics: Schematics[];
  };

  export type Schematics = {
    __typename?: 'Schematic';

    name: string;

    description: string;

    collection: string;
  };
}

export namespace Workspace {
  export type Variables = {
    path: string;
  };

  export type Query = {
    __typename?: 'Query';

    workspace: Workspace;
  };

  export type Workspace = {
    __typename?: 'Workspace';

    name: string;

    path: string;

    dependencies: Dependencies[];

    projects: Projects[];
  };

  export type Dependencies = {
    __typename?: 'Dependencies';

    name: string;

    version: string;
  };

  export type Projects = {
    __typename?: 'Project';

    name: string;

    root: string;

    projectType: string;

    architect: Architect[];
  };

  export type Architect = {
    __typename?: 'Architect';

    name: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root'
})
export class BasicWorkspaceGQL extends Apollo.Query<
  BasicWorkspace.Query,
  BasicWorkspace.Variables
> {
  document: any = gql`
    query BasicWorkspace($path: String!) {
      workspace(path: $path) {
        path
        name
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class GetDirectoryPathGQL extends Apollo.Mutation<
  GetDirectoryPath.Mutation,
  GetDirectoryPath.Variables
> {
  document: any = gql`
    mutation GetDirectoryPath(
      $dialogTitle: String!
      $dialogButtonLabel: String!
      $angularWorkspace: Boolean!
    ) {
      selectDirectory(
        dialogTitle: $dialogTitle
        dialogButtonLabel: $dialogButtonLabel
        angularWorkspace: $angularWorkspace
      ) {
        selectedDirectoryPath
        error
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class NgNewGQL extends Apollo.Mutation<NgNew.Mutation, NgNew.Variables> {
  document: any = gql`
    mutation NgNew(
      $path: String!
      $name: String!
      $collection: String!
      $newCommand: [String!]!
    ) {
      ngNew(
        path: $path
        name: $name
        collection: $collection
        newCommand: $newCommand
      ) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class OpenWorkspaceGQL extends Apollo.Query<
  OpenWorkspace.Query,
  OpenWorkspace.Variables
> {
  document: any = gql`
    query OpenWorkspace($path: String!) {
      workspace(path: $path) {
        name
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class SchematicCollectionsGQL extends Apollo.Query<
  SchematicCollections.Query,
  SchematicCollections.Variables
> {
  document: any = gql`
    query SchematicCollections {
      schematicCollections {
        name
        description
        schema {
          name
          enum
          type
          description
          defaultValue
          required
          positional
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class SaveRecentActionGQL extends Apollo.Mutation<
  SaveRecentAction.Mutation,
  SaveRecentAction.Variables
> {
  document: any = gql`
    mutation SaveRecentAction(
      $workspacePath: String!
      $projectName: String!
      $actionName: String!
      $schematicName: String
    ) {
      saveRecentAction(
        workspacePath: $workspacePath
        projectName: $projectName
        actionName: $actionName
        schematicName: $schematicName
      ) {
        actionName
        schematicName
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class WorkspaceDocsGQL extends Apollo.Query<
  WorkspaceDocs.Query,
  WorkspaceDocs.Variables
> {
  document: any = gql`
    query WorkspaceDocs($path: String!) {
      workspace(path: $path) {
        docs {
          workspaceDocs {
            id
            description
            prop
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class WorkspaceSchematicsGQL extends Apollo.Query<
  WorkspaceSchematics.Query,
  WorkspaceSchematics.Variables
> {
  document: any = gql`
    query WorkspaceSchematics($path: String!) {
      workspace(path: $path) {
        schematicCollections {
          name
          schematics {
            name
            description
            collection
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class WorkspaceGQL extends Apollo.Query<
  Workspace.Query,
  Workspace.Variables
> {
  document: any = gql`
    query Workspace($path: String!) {
      workspace(path: $path) {
        name
        path
        dependencies {
          name
          version
        }
        projects {
          name
          root
          projectType
          architect {
            name
          }
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
